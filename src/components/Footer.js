/**
 * Created by n06rin on 13.01.17.
 */

import React from 'react'
import FilterLink from '../containers/FilterLink'

const Footer = () => (
    <p>
        Показать:
        {" "}
        <FilterLink filter="SHOW_ALL">
            ВСЕ
        </FilterLink>
        {", "}
        <FilterLink filter="SHOW_IMPORTANT_0">
            Обычные
        </FilterLink>
        {", "}
        <FilterLink filter="SHOW_IMPORTANT_1">
            Важные
        </FilterLink>
        {", "}
        <FilterLink filter="SHOW_IMPORTANT_2">
            Очень важные
        </FilterLink>
    </p>
)

export default Footer