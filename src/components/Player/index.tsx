import React, { FC, useState, useCallback, memo, Dispatch, SetStateAction } from 'react';
import { View } from 'react-native';
import YoutubeIframe from 'react-native-youtube-iframe';

import { ScreenWidth } from 'components/shared';

type PlayerProps = {
  videoId: string;
  currentVideo: string;
  setCurrentVideo: Dispatch<SetStateAction<string>>;
};

const Player: FC<PlayerProps> = ({ videoId, currentVideo, setCurrentVideo }) => {
  const [playing, setPlaying] = useState<boolean>(false);

  const onStateChanged = useCallback((state: string): void => {
    if (state === 'ended' || currentVideo !== videoId) {
      setPlaying(false);
    }
    if (state === 'playing') {
      setPlaying(true);
      setCurrentVideo(videoId);
    }
    if (state === 'paused') {
      setPlaying(false);
    }
  }, []);

  return (
    <>
      <View
        style={{
          width: ScreenWidth,
          aspectRatio: 16 / 9,
          marginVertical: 12,
        }}>
        <View>
          <YoutubeIframe
            height={350}
            width={ScreenWidth}
            play={playing}
            videoId={videoId}
            onChangeState={onStateChanged}
          />
        </View>
      </View>
    </>
  );
};

export default memo(Player);
