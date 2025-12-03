export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string?;
  timezone: any?;
  location: string?;
  bio: string?;
  username: string?;
  profilePicture: any?;
}

export interface Event {
  id: number;
  imageUrl: string?;
  name: string;
  description: string?;
  category: string?;
  imagePath: string?;
  date: any;
  time: any;
  address: string?;
  ticketPrice: number?;
  maxAttendees: number?;
  owner: number;
}
