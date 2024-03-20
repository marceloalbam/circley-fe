import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import cmsPageQuery from '../../queries/getCmsPage.graphql';
import { fullPageLoadingIndicator } from '../../components/LoadingIndicator';
import { number } from 'prop-types';

const CMSPage = props => {
    const { id } = props;
    const { loading, error, data } = useQuery(cmsPageQuery, {
        variables: {
            id: Number(id),
            onServer: false
        }
    });

    if (error) {
        if (process.env.NODE_ENV !== 'production') {
            console.error(error);
        }
        return 'Page Fetch Error';
    }

    if (loading) {
        return fullPageLoadingIndicator;
    }

    if (data) {
        return data.cmsPage.content
    }
    return null;
};

CMSPage.propTypes = {
    id: number
};

export default CMSPage;
