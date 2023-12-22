import React, { useState, useMemo } from 'react'
import { useForm } from 'react-hook-form'
import { useIntl } from 'react-intl'
import { useCreateReview } from '@wpro/magento/dist/core/hooks/'
import { RatingStars } from '../RatingStars'
import { reviewFormInitialValues, reviewsFormSchema } from '../..'
import { Box, Button, Heading } from '@chakra-ui/react'
import { useProductByPath } from '@wpro/magento/dist/modules/catalog/hooks'
import { InputField, TextareaField } from '@wpro/ui'
import { yupResolver } from '@hookform/resolvers/yup'

export const ReviewsForm = ({
  productName,
  store = 'default',
}: {
  productName: string
  store?: string
}) => {
  const intl = useIntl()
  const { product } = useProductByPath()
  const productId = product?.id
  // TODO: Enable captcha
  const [captcha, setCaptcha] = useState<string | undefined>()
  const captchaPublicKey = process.env.NEXT_PUBLIC_GOOGLE_CAPTCHA_KEY

  const { createReview, isLoading } = useCreateReview({
    onSuccessShowToast: true,
    onErrorShowToast: true,
  })

  const yupSchema = useMemo(() => reviewsFormSchema({ intl }), [intl])
  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
    getValues,
  } = useForm<{
    ratingSelected: number
    title: string
    name: string
    reviewContent: string
  }>({
    resolver: yupResolver(yupSchema),
    mode: 'onTouched',
    shouldFocusError: true,
    defaultValues: reviewFormInitialValues,
  })

  const handleFormSubmit = (values: any) => {
    const dataToSubmit = { ...values }
    if (!productId) return
    createReview({
      input: {
        product_id: productId,
        nickname: dataToSubmit?.name,
        title: dataToSubmit?.title,
        detail: dataToSubmit?.reviewContent,
        rating_votes: [{ rating_id: 7, value: dataToSubmit?.ratingSelected }],
      },
    })
  }

  const ReviewCharacterLimit = 10000
  const [textAreaCount, setTextAreaCount] = useState(ReviewCharacterLimit)
  const wordCount = (e: any) => {
    const currentText = e.target.value
    const characterCount = currentText.length
    const characterLimit = ReviewCharacterLimit
    const TextAreaCharacterRemain = characterLimit - characterCount
    setTextAreaCount(TextAreaCharacterRemain)
  }

  return (
    <>
      <Box>
        <Heading
          as="h4"
          fontSize="3xl"
          textTransform="none"
          mb={6}
          lineHeight="1.4"
        >
          <Box
            fontSize="lg"
            fontFamily="body"
            letterSpacing="0"
          >{`You're reviewing:`}</Box>
          {productName}
        </Heading>
        <Box maxW={{ lg: '50%' }}>
          <form
            onSubmit={handleSubmit((data) => {
              if (isLoading) {
                return
              }

              handleFormSubmit?.(data)
            })}
          >
            <Box className="ratings" w="100%">
              <Box as="label" d="block" mb={1}>
                <span>Rating:</span>
              </Box>
              <Box>
                <RatingStars
                  store={store}
                  isInteractive
                  onRate={(rate: any) =>
                    setValue('ratingSelected', rate.rating)
                  }
                  ratingCount={getValues('ratingSelected')}
                />
                <input type="hidden" name="ratingSelected" />
              </Box>
            </Box>

            <InputField
              label="Title"
              inputProps={register('title')}
              error={errors.title}
              isRequired
            />
            <InputField
              label="Name to Display"
              inputProps={register('name')}
              error={errors.name}
              isRequired
            />

            <Box w="100%">
              <TextareaField
                label="Your Review"
                inputProps={{
                  ...register('reviewContent'),
                  onChange: (event: any) => wordCount(event),
                }}
                error={errors.reviewContent}
                isRequired
                callToAction={
                  <Box as="span" color="gray.500">
                    ({textAreaCount}/10000 characters remaining)
                  </Box>
                }
              />
            </Box>
            {/* <div className='captcha'>
                  {!fetchingCaptchaKey && captchaPublicKey ? (
                    <ReCAPTCHA
                      sitekey={captchaPublicKey}
                      onChange={key => setCaptcha(key ?? undefined)}
                    />
                  ) : (
                    <Spinner />
                  )}
                </div> */}
            <Box w="100%">
              <Button
                mt={4}
                type="submit"
                size="lg"
                maxW="none"
                w={{ base: '100%', sm: 'auto ' }}
                variant={`primary-${store as string}`}
                isLoading={isLoading}
              >
                Send
              </Button>
            </Box>
          </form>
        </Box>
      </Box>
    </>
  )
}
