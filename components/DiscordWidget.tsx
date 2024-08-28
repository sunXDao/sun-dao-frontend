'use client'

import WidgetBot from '@widgetbot/react-embed'

export default function DiscordWidget() {
  return (
    <>
      <WidgetBot
        server="1276926398585507871"
        channel="1276926399076110430"
        height={500}
        width={800}
        shard="https://e.widgetbot.io"
        // onAPI={(api) => { }}
        // shard='https://e.widgetbot.io'
      />
      {/* <iframe src="https://e.widgetbot.io/channels/1276926398585507871/1276926399076110430" frameBorder="0" height={500} width={500} className='mx-auto'></iframe> */}
    </>
  );
};


