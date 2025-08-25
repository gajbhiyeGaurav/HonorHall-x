import { FlatList } from 'react-native';
import posts from '~/assets/data/posts.json';
import PostListItem from '~/src/components/PostListItem';

export default function FeedScreen() {
    return (
        <FlatList
            data={posts}
            contentContainerStyle={{ 
                gap:10, 
                maxWidth: 512, 
                alignSelf: 'center',
                width: '100%'
            }}
            renderItem={({ item }) => <PostListItem post={item} />}
            showsVerticalScrollIndicator={false}
        />
    )

    // return(
    //     <View>
    //         <PostListItem post={posts[0]}/>
    //         <PostListItem post={posts[1]}/>
    //         <PostListItem post={posts[2]}/>
    //     </View>
    // );
} 