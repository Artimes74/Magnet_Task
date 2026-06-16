import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { MagnetStoryItem } from 'components/molecule';

const OwnerStoryItem = () => {
  return (
    <MagnetStoryItem
      item={{
        id: 0,
        name: 'artimes',
        avatar:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSszwRUu2BAE__ec_i6dIYtGAuAZYkmaxF2NA&s',
        isOwner: true,
      }}
    />
  );
};

export default OwnerStoryItem;

const styles = StyleSheet.create({});
