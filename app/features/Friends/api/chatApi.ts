import { ChatListResponse, RequestActionPayload } from '../types/chat.types';

export const getChatList = async (): Promise<ChatListResponse> => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        stories: [
          {
            id: 1,
            name: 'Alex Morgan',
            avatar: 'https://reqres.in/img/faces/1-image.jpg',
          },
          {
            id: 2,
            name: 'Jordan Smith',
            avatar: 'https://reqres.in/img/faces/2-image.jpg',
          },
          {
            id: 3,
            name: 'Chris Evans',
            avatar: 'https://reqres.in/img/faces/3-image.jpg',
          },
          {
            id: 4,
            name: 'Emma Watson',
            avatar: 'https://reqres.in/img/faces/4-image.jpg',
          },
          {
            id: 5,
            name: 'Liam Neeson',
            avatar: 'https://reqres.in/img/faces/5-image.jpg',
          },
        ],
        menu: [
          { key: 'mates', label: 'Mates' },
          { key: 'requests', label: 'Requests' },
          { key: 'pending', label: 'Pending' },
        ],

        mates: [
          {
            id: 1,
            name: 'Alex Morgan',
            avatar: 'https://reqres.in/img/faces/1-image.jpg',
            isFavorite: true,
            isOnline: true,
            isVip: false,
            section: 'Mates',
          },
          {
            id: 2,
            name: 'Jordan Smith',
            avatar: 'https://reqres.in/img/faces/2-image.jpg',
            isOnline: true,
            isFavorite: false,
            isVip: false,
            section: 'Mates',
          },
          {
            id: 3,
            name: 'Chris Evans',
            avatar: 'https://reqres.in/img/faces/3-image.jpg',
            isFavorite: false,
            isVip: false,
            isOnline: false,
            section: 'Mates',
          },
          {
            id: 4,
            name: 'Emma Watson',
            avatar: 'https://reqres.in/img/faces/4-image.jpg',
            isFavorite: false,
            isOnline: true,
            isVip: false,
            section: 'Mates',
          },
          {
            id: 5,
            name: 'Liam Neeson',
            avatar: 'https://reqres.in/img/faces/5-image.jpg',
            isFavorite: true,
            isOnline: false,
            isVip: false,
            section: 'Mates',
          },
          {
            id: 6,
            name: 'Sophia Turner',
            avatar: 'https://reqres.in/img/faces/6-image.jpg',
            isFavorite: false,
            isOnline: true,
            isVip: true,
            section: 'Mates',
          },
          {
            id: 7,
            name: 'Michael B. Jordan',
            avatar: 'https://reqres.in/img/faces/7-image.jpg',
            isFavorite: false,
            isOnline: true,
            isVip: false,
            section: 'Mates',
          },
          {
            id: 1,
            name: 'Alex Morgan',
            avatar: 'https://reqres.in/img/faces/1-image.jpg',
            isFavorite: true,
            isOnline: true,
            isVip: false,
            section: 'Mates',
          },
          {
            id: 2,
            name: 'Jordan Smith',
            avatar: 'https://reqres.in/img/faces/2-image.jpg',
            isFavorite: false,
            isOnline: true,
            isVip: true,
            section: 'Mates',
          },
          {
            id: 3,
            name: 'Chris Evans',
            avatar: 'https://reqres.in/img/faces/3-image.jpg',
            isFavorite: false,
            isOnline: false,
            isVip: false,
            section: 'Mates',
          },
          {
            id: 4,
            name: 'Emma Watson',
            avatar: 'https://reqres.in/img/faces/4-image.jpg',
            isFavorite: false,
            isOnline: true,
            isVip: true,
            section: 'Mates',
          },
          {
            id: 5,
            name: 'Liam Neeson',
            avatar: 'https://reqres.in/img/faces/5-image.jpg',
            isFavorite: true,
            isOnline: false,
            isVip: true,
            section: 'Mates',
          },
          {
            id: 6,
            name: 'Sophia Turner',
            avatar: 'https://reqres.in/img/faces/6-image.jpg',
            isFavorite: false,
            isOnline: true,
            isVip: false,
            section: 'Mates',
          },
          {
            id: 7,
            name: 'Michael B. Jordan',
            avatar: 'https://reqres.in/img/faces/7-image.jpg',
            isFavorite: false,
            isOnline: true,
            isVip: true,
            section: 'Mates',
          },
          {
            id: 1,
            name: 'Alex Morgan',
            avatar: 'https://reqres.in/img/faces/1-image.jpg',
            isFavorite: true,
            isOnline: true,
            isVip: false,
            section: 'Mates',
          },
          {
            id: 2,
            name: 'Jordan Smith',
            avatar: 'https://reqres.in/img/faces/2-image.jpg',
            isFavorite: false,
            isOnline: true,
            isVip: true,
            section: 'Mates',
          },
          {
            id: 3,
            name: 'Chris Evans',
            avatar: 'https://reqres.in/img/faces/3-image.jpg',
            isFavorite: false,
            isOnline: false,
            isVip: false,
            section: 'Mates',
          },
          {
            id: 4,
            name: 'Emma Watson',
            avatar: 'https://reqres.in/img/faces/4-image.jpg',
            isFavorite: false,
            isOnline: true,
            isVip: true,
            section: 'Mates',
          },
          {
            id: 5,
            name: 'Liam Neeson',
            avatar: 'https://reqres.in/img/faces/5-image.jpg',
            isFavorite: true,
            isOnline: false,
            isVip: true,
            section: 'Mates',
          },
          {
            id: 6,
            name: 'Sophia Turner',
            avatar: 'https://reqres.in/img/faces/6-image.jpg',
            isFavorite: false,
            isOnline: true,
            isVip: false,
            section: 'Mates',
          },
          {
            id: 7,
            name: 'Michael B. Jordan',
            avatar: 'https://reqres.in/img/faces/7-image.jpg',
            isFavorite: false,
            isOnline: true,
            isVip: true,
            section: 'Mates',
          },
        ],

        requests: [
          {
            id: 8,
            name: 'Tobi Lee',
            avatar: 'https://reqres.in/img/faces/8-image.jpg',
            timeOfRequested: '12:30 AM',
            isFavorite: true,
            isVip: false,
            section: 'Request',
          },
          {
            id: 9,
            name: 'Name Surname',
            avatar: 'https://reqres.in/img/faces/9-image.jpg',
            timeOfRequested: '11:45 PM',
            isFavorite: false,
            isVip: true,
            section: 'Request',
          },
          {
            id: 10,
            name: 'Olivia Brown',
            avatar: 'https://reqres.in/img/faces/10-image.jpg',
            timeOfRequested: '10:20 PM',
            isFavorite: false,
            isVip: false,
            section: 'Request',
          },
          {
            id: 11,
            name: 'Daniel Craig',
            avatar: 'https://reqres.in/img/faces/11-image.jpg',
            timeOfRequested: '09:15 PM',
            isFavorite: false,
            isVip: false,
            section: 'Request',
          },
        ],

        pending: [
          {
            id: 15,
            name: 'Tobi Lee',
            avatar: 'https://reqres.in/img/faces/3-image.jpg',
            timeOfRequested: '12:30 AM',
            isFavorite: false,
            isVip: false,
            section: 'Pending',
          },
          {
            id: 16,
            name: 'Name Surname',
            avatar: 'https://reqres.in/img/faces/4-image.jpg',
            timeOfRequested: '11:00 PM',
            isFavorite: false,
            isVip: false,
            section: 'Pending',
          },
          {
            id: 17,
            name: 'Daniel Craig',
            avatar: 'https://reqres.in/img/faces/5-image.jpg',
            timeOfRequested: '09:10 PM',
            isFavorite: true,
            isVip: true,
            section: 'Pending',
          },
        ],
      });
    }, 800);
  });
};

export const cancelRequest = async ({
  requestId,
}: RequestActionPayload): Promise<{ success: boolean }> => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ success: true });
    }, 500);
  });
};

export const acceptRequest = async ({
  requestId,
}: RequestActionPayload): Promise<{ success: boolean }> => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ success: true });
    }, 500);
  });
};

export const declineRequest = async ({
  requestId,
}: RequestActionPayload): Promise<{ success: boolean }> => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ success: true });
    }, 500);
  });
};
