import React, { useMemo, useState } from "react";
import { Pressable, Text, View } from "react-native";

import {
  MagnetAvatar,
  MagnetButton,
  MagnetFriendsList,
  MagnetIcon,
  MagnetListItem,
  MagnetSearchBar,
  MagnetStoryList,
  MagnetSwipeableListItem,
  PagerTabItem,
  Screen,
} from "components";
import { Section, useFriends } from "features";

import { Colors, size } from "theme";
import styles from "./styles";
import { FriendsPagerItem, FriendsPagerKey } from "./types";

const ChatListScreen = () => {
  const [searchText, setSearchText] = useState("");
  const [vipOnly, setVipOnly] = useState(false);
  const { data, isLoading, isError } = useFriends();

  const onChangeText = (txt: string) => {
    setSearchText(txt);
  };

  const filteredTabs = useMemo<
    PagerTabItem<FriendsPagerKey, FriendsPagerItem>[]
  >(() => {
    const normalizedSearch = searchText.trim().toLowerCase();

    const filterItems = (items: FriendsPagerItem[]) => {
      return items.filter((item) => {
        const matchesSearch =
          !normalizedSearch ||
          item.name.toLowerCase().includes(normalizedSearch);

        const matchesVip = !vipOnly || item.isVip === true;

        return matchesSearch && matchesVip;
      });
    };

    return [
      {
        label: "Mates",
        value: "mates",
        data: filterItems(data?.mates ?? []),
        swipeEnabled: true,
      },
      {
        label: "Requests",
        value: "requests",
        data: filterItems(data?.requests ?? []),
        swipeEnabled: false,
      },
      {
        label: "Pending",
        value: "pending",
        data: filterItems(data?.pending ?? []),
        swipeEnabled: false,
      },
    ];
  }, [searchText, vipOnly, data?.mates, data?.requests, data?.pending]);

  return (
    <Screen
      parentType="View"
      edges={["bottom"]}
      style={styles.container}
      hasPaddingHorizontal={false}
    >
      <View testID="friends-screen" style={{ flex: 1 }}>
        <MagnetStoryList data={data?.stories ?? []} isLoading={isLoading} />

        <MagnetSearchBar
          onChangeText={onChangeText}
          style={styles.searchBar}
          EndComponent={
            <Pressable
              style={[
                styles.SearchBarEndComponentContainer,
                vipOnly && styles.vipBackgroundColor,
              ]}
              onPress={() => {
                setVipOnly((prv) => !prv);
              }}
            >
              <MagnetIcon
                name="badge-check"
                size={size.x4}
                color={Colors.text.primary}
              />
              <Text style={styles.vipText}>VIP</Text>
            </Pressable>
          }
        />

        <MagnetFriendsList
          tabs={filteredTabs}
          keyExtractor={(_, index) => index.toString()}
          isLoading={isLoading}
          renderItem={({ item }) => {
            return (
              <MagnetSwipeableListItem
                enabled={item.section === Section.Mates}
                RightAction={
                  <MagnetIcon
                    name="more"
                    size={size.x1}
                    color={Colors.text.primary}
                  />
                }
              >
                <MagnetListItem
                  title={item.name}
                  hasIconInTitle={item.isVip}
                  StartComponent={
                    <View style={styles.startComponentStyle}>
                      {item?.isFavorite ? (
                        <MagnetIcon
                          name={"favorite-button-whitout-prototype"}
                          size={size.x5}
                          color="#C29EFF"
                        />
                      ) : (
                        <View style={styles.blockSpace} />
                      )}
                      <MagnetAvatar
                        variant="list"
                        uri={item.avatar}
                        isOnline={"isOnline" in item ? item.isOnline : false}
                        hasBorder={
                          item.section === Section.Mates ? true : false
                        }
                      />
                    </View>
                  }
                  EndComponent={
                    item.section === Section.Mates ? (
                      <MagnetIcon
                        name="message-circle-lines"
                        size={size.x6}
                        color={Colors.button.primaryLight}
                      />
                    ) : item.section === Section.Request ? (
                      <View>
                        <Text style={styles.endComponentRequestTimeStyle}>
                          13:20 AM
                        </Text>
                        <View
                          style={
                            styles.endComponentRequestButtonsContainerStyle
                          }
                        >
                          <MagnetButton
                            type="Text"
                            style={styles.endComponentRequestDeclineButton}
                            title="Decline"
                            titleStyle={
                              styles.endComponentRequestDeclineButtonText
                            }
                          />
                          <MagnetButton
                            type="Text"
                            style={styles.endComponentRequestAcceptButton}
                            title="Accept"
                            titleStyle={
                              styles.endComponentRequestAcceptButtonText
                            }
                          />
                        </View>
                      </View>
                    ) : (
                      <View>
                        <View style={styles.endComponentPendingContainerStyle}>
                          <View style={styles.endComponentPendingBulletPoint} />
                          <Text style={styles.endComponentPendingTimeText}>
                            13:20 AM
                          </Text>
                        </View>
                        <MagnetButton
                          type="Text"
                          style={styles.endComponentPendingCancelButton}
                          title="Cancel Request"
                          titleStyle={
                            styles.endComponentPendingCancelButtonText
                          }
                        />
                      </View>
                    )
                  }
                />
              </MagnetSwipeableListItem>
            );
          }}
        />
      </View>
    </Screen>
  );
};

export default ChatListScreen;
