import React, { FC, useState } from 'react';
import { useRoute } from '@react-navigation/native';
import { useQuery } from '@tanstack/react-query';
import { ScrollView, View } from 'react-native';

import Player from 'components/Player';
import { Container, Title } from 'components/shared';
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
      <View>
        <Title>Loading...</Title>
      </View>
    );
  if (error)
    return (
      <View>
        <Title>An error has occured...</Title>
      </View>
    );

  return (
    <Container>
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
    </Container>
  );
};

export default PlayVideo;
