import React from "react";
import { useSelector, TypedUseSelectorHook } from 'react-redux'
import { unixToTimePassed } from '../util'
import { BlueLine } from '../styled-components/lines'
import { SectionTitle } from '../styled-components/text'
import { Headline, NewsList, ListItem, ArticleLabel } from '../styled-components/news'
import {StockState} from '../reducers/types'

const useTypedSelector: TypedUseSelectorHook<StockState> = useSelector
const News = () => {
    const news = useTypedSelector(state => state?.news);
    return (
        <div className="news">
            <SectionTitle>LATEST NEWS</SectionTitle>
            <BlueLine />
            <NewsList data-testid='newslist'>
                {news?.map((article, index) =>
                    <ListItem>
                        <Headline data-testid={'headline'+index}>{article?.headline}</ Headline>                    
                        <ArticleLabel data-testid={'tag'+index}>{unixToTimePassed(article?.datetime)} - {article?.source}</ArticleLabel>
                    </ListItem>
                )}

            </NewsList>

        </div>
    );
}

export default News;