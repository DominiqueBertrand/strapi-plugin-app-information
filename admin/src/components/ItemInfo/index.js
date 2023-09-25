/**
 *
 * ItemInfo
 *
 */

import React from 'react';
import { Typography, Flex } from '@strapi/design-system';
import { useIntl } from 'react-intl';
import PropTypes from 'prop-types';
import getTrad from '../../utils/getTrad';


const ItemInfo = ({ message, defaultMessage, value }) => {

    const { formatMessage } = useIntl();

    return <div className='item-info-361e117d-cf87-4bcf-891a-185e586f2cc1'>
        <Typography variant="sigma" textColor="neutral600" as="dt">
            {formatMessage({
                id: getTrad(message),
                defaultMessage,
            })}
        </Typography>
        <Flex gap={3} direction="column" alignItems="start" as="dd">
            <Typography>{value}</Typography>
        </Flex>
    </div >
}

ItemInfo.propTypes = {
    message: PropTypes.string.isRequired,
    defaultMessage: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
};

export default ItemInfo;
