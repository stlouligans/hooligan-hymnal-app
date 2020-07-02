import _ from "lodash";

export const getFeaturedSong = (songbook, allSongs) => {
  if (songbook && allSongs && allSongs.length && songbook.chapters) {
    let featuredSongs = [];
    songbook.chapters.forEach((chapter) => {
      chapter.songs.forEach((songChild) => {
        if (songChild.featured) {
          // does this song id exist in the songs list
          featuredSongs.push(
            allSongs.filter((song) => song._id === songChild._id)[0]
          );
        }
      });
    });
    if (featuredSongs.length) {
      return _.sample(featuredSongs);
    } else {
      return DEFAULT_SONG;
    }
  } else {
    return DEFAULT_SONG;
  }
};

const DEFAULT_SONG = {
  _id: 1,
  category: 'game',
  create_time: '',
  update_time: '',
  title: '',
  tags: '',
  lyrics:
    "",
  tbd_various_boolean_flags: '',
  reference_title: '',
  reference_link: '',
  instructions: '',
  playerId: -1,
  override_html: "",
  delete_local: "",
};
