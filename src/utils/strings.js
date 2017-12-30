// @flow
export const getInitials = (value: string): string => {
  const words = value.split(' ');

  if (words.length === 1) {
    return words[0].substr(0, 2);
  }

  return `${words[0].substr(0, 1)}${words[1].substr(0, 1)}`;
};
