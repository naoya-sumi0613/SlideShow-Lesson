$(".theTarget").skippr({
	//スライドショーの変化(fade or slide)
	transition : 'fade',

	//変化にかかる時間(ミリ秒)
	speed : 1000,

	//easingの種類(??)
	//アニメーションの進行速度?
	easing : 'easeOutQuart',

	//ナビゲーションの形(block or bubble)
	//ナビゲーション=写真の下部に表示されるやつ
	navType : 'block',

	//子要素の種類(div or img)
	//どちらでも動く。よく分からない
	childrenElementType : 'div',

	//ナビゲーションの矢印表示(写真の左右のやつ)
	arrows : true,

	//スライドショーの自動再生(falseで自動再生なし)
	autoPlay : true,

	//自動再生時のスライド切換間隔(ミリ秒)
	autoPlayDuration : 5000,

	//キーボードの矢印キーによるスライド送りの設定(trueで有効)
	keyboardOnAlways : true,

	//1枚目のスライド表示時に戻る矢印を表示するかどうか
	//1枚目の時は右矢印のみになる
	//最後は片方にならない
	hidePrevious : true
});