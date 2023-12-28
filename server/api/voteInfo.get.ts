import { dataService } from "../dataService"

export default defineCachedEventHandler(() => {
  const voteInfo = dataService.getVoteInfo();

  return voteInfo;
})