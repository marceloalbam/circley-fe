import type { NextApiHandler } from 'next'

export const handler: NextApiHandler = async (req, res) => {
  const body = req.body

  if (!body.email) {
    return res.status(400).json({ error: 'No email found' })
  }

  const options = {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
      authorization: `Basic ${process.env.NEXT_PUBLIC_DOTDIGITAL_AUTH}`,
    },
    body: JSON.stringify({ email: body.email }),
  }

  await fetch(
    `https://r2-api.dotdigital.com/v2/address-books/${process.env.NEXT_PUBLIC_DOTDIGITAL_NEWSLETTER_LIST_ID}/contacts`,
    options
  )

  res.status(200).json({ success: true })
}

export default handler
