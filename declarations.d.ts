declare module 'react-native-vector-icons/lib/create-icon-set-from-icomoon';
declare module '*.png' {
  const value: import('react-native').ImageSourcePropType;

  export default value;
}

declare module '*.jpg' {
  const value: import('react-native').ImageSourcePropType;

  export default value;
}

declare module '*.jpeg' {
  const value: import('react-native').ImageSourcePropType;

  export default value;
}

declare module '*.webp' {
  const value: import('react-native').ImageSourcePropType;

  export default value;
}

declare module '*.svg' {
  const content: React.FC<any>;

  export default content;
}
