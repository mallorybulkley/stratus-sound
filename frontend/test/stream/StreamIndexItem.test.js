import React from 'react';
import StreamIndexItem from '../../components/stream/stream_index_item.jsx';
import renderer from 'react-test-renderer';

test('Link changes the class when hovered', () => {
    const component = renderer.create(
        <StreamIndexItem
            track={{}}
            queue={[]}
            receiveCurrentTrack={() => {}}
            togglePlay={() => {}}
            currentTrack={{}}
        />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});