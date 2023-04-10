import React, { FC, useState } from 'react';
import { useRoute } from '@react-navigation/native';
import { useQuery } from '@tanstack/react-query';
import { ScrollView, View, ActivityIndicator } from 'react-native';

import Player from 'components/Player';
import { Container, Title, ScreenHeight, ScreenWidth } from 'components/shared';
import { PlayerScreenRouteProp } from 'navigation/types';
import { VideoDataType, VideoDataItemType } from 'types';
import { API } from 'utils';

const PlayVideo: FC = () => {
  const route = useRoute<PlayerScreenRouteProp>();

  const { movieId } = route.params;

  const { data, isLoading, error } = useQuery<VideoDataType | Error>({
    queryKey: ['videos', movieId],
    queryFn: () => API.fetchVideo(movieId),
  });

  const [currentVideo, setCurrentVideo] = useState('');

  if (isLoading)
    return (
      <Container>
        <ActivityIndicator size={ScreenHeight > ScreenWidth ? ScreenWidth / 6 : ScreenHeight / 6} />
      </Container>
    );
  if (error)
    return (
      <Container>
        <Title>An error has occured...</Title>
      </Container>
    );

  return (
    <Container>
      {data.results.length ? (
        <ScrollView>
          {data.results.map((video: VideoDataItemType) => (
            <Player
              key={video.key}
              videoId={video.key}
              currentVideo={currentVideo}
              setCurrentVideo={setCurrentVideo}
            />
          ))}
        </ScrollView>
      ) : (
        <Title>No video </Title>
      )}
    </Container>
  );
};

export default PlayVideo;
