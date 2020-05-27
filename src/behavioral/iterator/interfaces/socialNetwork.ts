import CCIterator from './ccIterator'

interface SocialNetwork {
  createFriendsIterator(profileID: string): CCIterator<string>
  createCoworkersIterator(profileID: string): CCIterator<string>
}

export default SocialNetwork
