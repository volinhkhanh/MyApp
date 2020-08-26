import React from 'react';
import { Drawer, DrawerItem, DrawerElement, DrawerItemElement, IndexPath } from '@ui-kitten/components';
import { SafeAreaLayout, SaveAreaInset } from '@components/safe-area-layout.component';

export const HomeDrawer = (props: any): DrawerElement => {

  const onItemSelect = (index: IndexPath): void => {
    const selectedTabRoute: string = props.state.routeNames[index.row];
    props.navigation.navigate(selectedTabRoute);
    props.navigation.closeDrawer();
  };

  const createDrawerItemForRoute = (route, index: number): DrawerItemElement => {
    const { options } = props.descriptors[route.key];
    return (
      <DrawerItem
        key={index}
        title={route.name}
        accessoryLeft={options.drawerIcon}
      />
    );
  };

  return (
    <SafeAreaLayout insets={SaveAreaInset.TOP}>
      <Drawer onSelect={onItemSelect}>
        {props.state.routes.map(createDrawerItemForRoute)}
      </Drawer>
    </SafeAreaLayout>
  );
};