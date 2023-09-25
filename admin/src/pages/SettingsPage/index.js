/*
 *
 * HomePage
 *
 */

import React, { memo } from 'react';
import { SettingsPageTitle } from '@strapi/helper-plugin';
import { HeaderLayout, ContentLayout, Flex, Main, Icon } from '@strapi/design-system';
import { Information } from "@strapi/icons";
import { useIntl } from 'react-intl';
import packageJson from '../../../../../../../package.json';
import getTrad from '../../../../../strapi-plugin-app-information/admin/src/utils/getTrad';
import ItemInfo from '../../../../../strapi-plugin-app-information/admin/src/components/ItemInfo'

const HomePage = () => {
  const { formatMessage } = useIntl();

  return (
    <Main>
      <SettingsPageTitle name="Application Information" />
      <Main>
        <HeaderLayout
          title={formatMessage({
            id: getTrad('plugin.name'),
            defaultMessage: 'App information',
          })}
          subtitle={formatMessage({
            id: getTrad('pages.PluginPage.header.description'),
            defaultMessage: 'Get information about the current application',
          })}
        />
      </Main>
      <ContentLayout>
        <Flex direction="column" alignItems="stretch" gap={6}>
          <Flex
            direction="row"
            alignItems="stretch"
            gap={4}
            hasRadius
            background="neutral0"
            shadow="tableShadow"
            paddingTop={6}
            paddingBottom={6}
            paddingRight={7}
            paddingLeft={7}
            style={{ flexWrap: "wrap" }}
          >
            <Flex
              paddingRight={5}
              paddingLeft={0}
              direction="row"
              alignItems="flex-start"
              gap={4}
              style={{ justifyContent: "space-between", alignSelf: "center" }}
            >
              <Icon as={Information} style={{ width: "5rem", height: "5rem" }} />
            </Flex>
            <Flex direction="column" alignItems="stretch" gap={4}>
              <ItemInfo message='pages.PluginPage.label.name' defaultMessage='Name' value={packageJson?.name} />
              <ItemInfo message='pages.PluginPage.label.version' defaultMessage='Version' value={packageJson?.version} />
              <ItemInfo message='pages.PluginPage.label.description' defaultMessage='Description' value={packageJson?.description} />
            </Flex>
          </Flex>
        </Flex>
      </ContentLayout>
    </Main>
  );
};

export default memo(HomePage);
