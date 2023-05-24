const videoid = ["sm37910958"/*チー牛*/,
				"sm38620406"/*ディスコネクト*/,
				"sm38937833"/*ユモレスク*/,
				"sm39126100"/*夢にサヨナラを*/,
				"sm39469505"/*ハンパナプラス*/,
				"sm39759354"/*人生なんて*/,
				"sm39911812"/*不時着*/,
				"sm40238726"/*シビレキラシテ*/,
				"sm40347559"/*アンコール*/,
				"sm40515900"/*Blink*/,
				"sm40823885"/*シンフォニア*/,
				"sm41190526"/*スペクトラム・ケプストラム*/,
				"sm41410666"/*ハルシネイション・シザーハンズ*/,
				"sm41720763"/*エターナルアリア*/,
				"sm41945586"/*シマエナガール*/];
const numbers = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14];
let shuffled_numbers = [];
let ind = 0;
let i = 0;
let j = 0;
const video0 = document.getElementById("video0");
const video1 = document.getElementById("video1");
const video2 = document.getElementById("video2");
const video3 = document.getElementById("video3");
const video4 = document.getElementById("video4");
const video5 = document.getElementById("video5");
const video6 = document.getElementById("video6");
const video7 = document.getElementById("video7");
const video8 = document.getElementById("video8");
const video9 = document.getElementById("video9");
const videos = [video0,video1,video2,video3,video4,video5,video6,video7,video8,video9];
//フィッシャーイェーツのアルゴリズムでシャッフルする関数
const shuffleArray = (array) => {
	for (i = array.length -1 ; i > 0 ; i--){
		j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
};

//ホントはform要素のonsubmitで関数呼び出したかった
document.getElementById("form").onkeydown = (e)=>{
	if(e.key == 'Enter'){
        enter()
    };
};
    
function enter(){
    //変数の初期化
    ind = 0;
	i = 0;
	shuffled_numbers = [];
	//ランダムに10個選出
	shuffleArray(numbers);
		//test
		//console.log(numbers);
	shuffled_numbers = numbers.slice(0,10);

    while(ind < 10){
		//動画を表示
		videos[ind].setAttribute("src","https://embed.nicovideo.jp/watch/" + videoid[shuffled_numbers[ind]] + "/script?w=640&h=360");
		ind ++;
	};
}
