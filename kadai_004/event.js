//読み込み完了後に「イベントが発生しました」とコンソールに出力
$(window).on('load',function(){
    console.log('loadイベントが発生しました')
});

//スクロールした際に「イベントが発生しました」とコンソール出力
$(window).on('scroll',function(){
    console.log('scrollイベントが発生しました')
});