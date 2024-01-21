import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Avatar, Card } from 'react-native-elements';
import EmojiButton from './EmojiButton'; // Assuming EmojiButton is a separate component
import muchlove from '../../assets/images/reactions/muchlove.png'
import babel from '../../assets/images/reactions/babel.config.png'
import samehere from '../../assets/images/reactions/samehere.png'
import staystrong from '../../assets/images/reactions/staystrong.png'
import youdeserveit from '../../assets/images/reactions/youdeserveit.png'

const JournalCard = ({ entry, handleEmojiPress }) => {

    return (
        <Card containerStyle={styles.cardContainer}>
            <View style={styles.cardHeader}>
                <Avatar size="small" rounded source={entry.avatar} />
                <Text style={styles.dateText}>{entry.date}</Text>
            </View>
            <Image source={entry.image} style={styles.cardImage} />
            <Text style={styles.imageDescription}>{entry.emotion}</Text>
            <Text style={styles.contentText}>{entry.content}</Text>
            <View style={styles.emojiContainer}>
                <EmojiButton
                    emojiImage={entry.emojiImage}
                    count={entry.emojiCount}
                    onPress={() => handleEmojiPress(entry.id, 'emojiType')}
                />
            </View>
        </Card>
    );
};

const styles = StyleSheet.create({
    cardContainer: {
        borderRadius: 10,
        // Add other styling as needed
    },
    cardHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    dateText: {
        fontFamily: 'Nunito, sans-serif',
        fontSize: 16,
    },
    cardImage: {
        aspectRatio: 1,
        resizeMode: 'cover',
    },
    imageDescription: {
        fontFamily: 'Nunito, sans-serif',
        fontSize: 16,
        fontWeight: 'bold',
        marginVertical: 10,
        textAlign: 'center',
    },
    contentText: {
        fontFamily: 'Nunito, sans-serif',
        marginVertical: 10,
    },
    emojiContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    // Add more styles as needed
});

export default JournalCard;