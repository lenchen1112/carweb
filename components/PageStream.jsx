'use strict';

var React = require('react');
var HeroStream = require('./HeroStream');
var Stream = require('./Stream');

var HERO_STREAM_MOCK = {
    name: 'Car collision',
    videos: [
        {
            youtubeId: '5XYxuVYmR6A'
        },
        {
            youtubeId: 'lOGAI_lTyJI'
        },
        {
            youtubeId: 'dFf4AgBNR1E'
        },
        {
            youtubeId: 'teMdjJ3w9iM'
        },
        {
            youtubeId: 'qEYOyZVWlzs'
        }
    ]
};

var PageStream = React.createClass({
    render: function() {
        return (
            <div className="PageStream">
                <HeroStream {...HERO_STREAM_MOCK} 
                    heroYoutubeId={this.props.route.params.heroYoutubeId}
                    name={this.props.route.params.streamName}/>
                <Stream/>
                <Stream/>
            </div>
        );
    }
});

module.exports = PageStream;
