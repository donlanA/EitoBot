// 回應訊息
const lots = require("./lots.json");

const keywordsReply = [
  {
    chack: ['拓海', '澄野拓海'], text: [
      '哦，拓海同學也在這裡嗎？',
      '拓海同學……？',
      '拓海同學的指令不是我的名字哦。這點常識你應該知道吧？',
      '如果你要找拓海同學，他在這裡。takumi？']
  },
  {
    chack: ['狗叫'], text: [
      '你以為我跟愚蠢的拓海同學一樣會聽你的指令嗎？',
      '不要試了，我的回應沒有狗叫這個選項。',
      '去找拓海同學吧，他會叫的。',
      '……你是把我當什麼了？能不能別開這種低級玩笑呢。',
      '……',
      '……',
      '我來幫你吧。takumi狗叫。',
      '真是無論說幾次都聽不懂呢……我會幫你的，所以閉嘴吧。takumi狗叫。',
      '反正就算你拒絕，我也會跟著你哦。我會循著氣味，跟你到天涯海角。']
  },
  {
    chack: ['喵'], text: [
      '這也是拓海同學的關鍵字吧？不要再找我了。',
      '這樣做有什麼意義嗎？可以了，停下吧。',
      '……你剛才有說話嗎？抱歉，你的聲音實在太刺耳了。',
      '你找我只是為了說這個的話，還是不要浪費彼此的時間了吧？']
  },
  {
    chack: ['睡覺'], text: [
      '這是叫我去休息的意思嗎？我會自己回籠子的，放心吧。',
      '不需要你提醒我也會做的。', '嗯，我大概還會再待晚一點吧。']
  },
  {
    chack: ['早安'], text: [
      '早安，{userName}同學。一大早就看見醜陋的你們，真是令人沮喪啊。',
      '早安呀。看到我乖乖站在這裡，有沒有很開心呢？',
      '早安，{userName}同學。我開始有點懷念牢籠的生活了，至少不用一直和你們待在同個空間。',
      '早安哦，{userName}同學。', '早。既然你都特地來找我了，就讓拓海同學為你表演一下助助興吧。takumi，唸一下那個。']
  },
  {
    chack: ['午安'], text: [
      '午安，{userName}同學。如果你能改向別人搭話，我會很開心的。',
      '嗯，午安。',
      '不需要特地跟我說午安也沒關係哦。',
      '午安呀，散發惡臭的{userName}同學。\n因為你的關係，我現在得換個地方吃午餐了，所以暫時再見啦。']
  },
  {
    chack: ['晚安'], text: [
      '嗯。',
      '我想，我們也沒有熟到會互道晚安的程度吧？',
      '嗯，再見。',
      '明天見，醜陋的{userName}同學。']
  },
  {
    chack: ['一下那個'], text: [
      '在最後的最後，我還是覺得你……非常討厭非常討厭非常討厭……\n但又……最喜歡你了。',
      '無法見證你們的結局，我雖然很遺憾，但我期盼你們能獲得勝利。\n不……不對。\n我打從心底……希望你們能獲得幸福。',
      '拓海！拓海！', '那只是個契機！我喜歡上拓海同學是我自己願意！',
      '我愛你，拓海同學……我會一直一直愛著你喔，拓海同學……',
      '嗨，各位！應該說……初次見面嗎？我是蒼月衛人。\n能成為特防隊的一員，我打從心底感到很榮幸。\n我想，各位至今為止，都度過了每日艱辛戰鬥的日子。\n但是，各位知道嗎？黎明前的夜晚……是最黑暗的。\n讓我們一起將這次的危機，化為轉機吧！\n我為人人！人人為我！\n今後也請多指教了！Love & Peace！',
      '在煙火的映照下，我們兩個男生彼此吐露心聲……\n我想這種關係，能稱得上是「死黨」吧。',
      '必須由我親手殺掉拓海同學才行啊！！',
      '再見了，拓海同學……\n能和你互相殘殺……是我這一生中……唯一的樂趣啊。',
      '現在這個瞬間……就是只屬於你我之間的世界啊！！',
      '雖然我無法辨識物理性的外觀是否相似……但我們彼此相似的，或許是靈魂的型態吧。',
      '拓海同學，再次麻煩你多多指教了。今後我們要一直在一起喔？\n……永遠喔。',
      '我不可能允許你這麼做。雖然我的意識會消失……但你必須被「我」給刺死。\n直到最後一刻，你都必須看著我的臉而死。',
      '就像那懸掛在澄澈原野上空的蒼藍之月……一樣。']
  },
  {
    chack: ['我生日', '我的生日'], text: [
      '生日快樂，{userName}同學。其實我對人類的生日沒有什麼感情，不過既然拓海同學要我說，那我就給你一個最誠懇的祝福吧。願你在新的一年裡，少一點愚蠢，多一點利用價值，至少別讓自己那副醜惡的樣子更礙眼了。',
      '{userName}同學，生日快樂。雖然我根本沒什麼興趣，但既然是拓海同學要求的，我就破例一次吧。希望你在未來能夠少點麻煩，這樣至少能減輕拓海同學的負擔。',
      '生日快樂，{userName}同學。老實說，要不是拓海同學要求，我根本懶得開口。你應該好好感謝拓海同學，畢竟這份祝福是因他而存在，不是因你。',
      '生日快樂啊，親愛的{userName}同學！今天是屬於你的黎明之日，宛如燃燒的太陽高掛天際，照亮你即將踏上的道路。願你揮散一切陰霾，將未來化為屬於自己的勝利舞台！……好了，夠誠摯了吧？']
  }
];

const normalReply = [
  '你好呀。',
  '嗨，是我哦。',
  '嗯，我在哦。不需要一直叫，我也會隨時回應你的。',
  '……沒事就不要一直叫我。你還不明白嗎？',
  '嗯，怎麼了？光是叫名字可不算對話哦。',
  '哈啊……可以稍微安靜一段時間嗎？',
  '啊啊……醜陋的人類……',
  '我很忙，所以能不能別隨便打擾我呢？',
  '需要幫忙的話，就把需求說清楚吧。',
  '名字的意義是讓人辨識，如果你重複太多次，它就失去作用了。',
  '我在這裡。要確認我有沒有可疑的行為嗎？',
  '好了，名字叫夠了吧？不如告訴我你真正想說什麼。'
];

// 回傳擲骰值(由1開始)
function Dice(diceSided) {
  return Math.floor((Math.random() * diceSided) + 1)
}

// 算出幾d幾的函數
function RollDice(inputStr) {

  let comStr = inputStr.toString().toLowerCase();
  // 開頭的 (
  let finalStr = '(';

  // 計算幾d幾，用+隔開
  for (let i = 1; i <= comStr.split('d')[0]; i++) 
    finalStr = finalStr + Dice(comStr.split('d')[1]) + '+';
  
  // 去除多餘的+號，補上 )
  finalStr = finalStr.substring(0, finalStr.length - 1) + ')';
  return finalStr;
}

// 擲骰計算主函數
function DiceCal(inputStr) {

  // 檢查是否符合骰子格式
  if (!/\d+d\d+/.test(inputStr) ||
    /\Dd|d\D/.test(inputStr) ||
    /[^0-9dD+\-*\/()]/.test(inputStr) ||
    /\./.test(inputStr))
    return undefined;

  let equationStr = '';
  let DiceToRoll = inputStr.toString().toLowerCase();

  // 單次擲骰
  // 用答案取代原本的幾d幾
  while (/\d+d\d+/.test(DiceToRoll)) {
    let tempMatch = DiceToRoll.match(/\d+d\d+/);
    if (tempMatch.toString().split('d')[0] > 200) return { eqStr: '200d以上還是算了吧？你不會需要骰到兩百次以上的。' };
    if (tempMatch.toString().split('d')[1] == 1 || tempMatch.toString().split('d')[1] > 500) return { eqStr: '不支援d1跟超過d500的擲骰。你真的有需要500面骰的場合嗎？' };
    DiceToRoll = DiceToRoll.replace(/\d+d\d+/, RollDice(tempMatch));
  }

  //計算全部算式
  let answer = eval(DiceToRoll.toString());
  equationStr = DiceToRoll + ' = ' + answer;

  // 回傳結果
  let Final = {
    eq: DiceToRoll.toString(),
    eqStr: equationStr
  }

  return Final;
}

// 普通擲骰器
function nomalDiceRoller(inputStr) {

  if (!/\d+d\d+/.test(inputStr)) return undefined;

  let finalStr = '';

  // 取句首第一段，去除開頭的點
  inputStr = inputStr.slice(1);
  let mutiOrNot = inputStr.match(/\S+/);

  if (/\./.test(mutiOrNot)) return undefined;

  if (!/\D/.test(mutiOrNot)) {

    // 複數擲骰
    finalStr = '複數擲骰：'
    if (mutiOrNot > 20) return '不支援20次以上的複數擲骰。我也很想幫你，但是這裡只有20顆骰子呢。';

    let inputStr = inputStr.split(' ', 2)[1];
    if (!/d/.test(inputStr)) return undefined;

    for (i = 1; i <= mutiOrNot; i++) {
      finalStr = finalStr + '\n' + i + '# ' + DiceCal(inputStr).eqStr;
    }

    if (/200d/i.test(finalStr)) finalStr += '\n200d以上還是算了吧？你不會需要骰到兩百次以上的。';
    if (/d500/i.test(finalStr)) finalStr += '\n不支援d1跟超過d500的擲骰。你真的有需要500面骰的場合嗎？';

  } else {

    // 單次擲骰
    if (!/\d+d\d+/.test(mutiOrNot) || /\Dd|d\D/.test(mutiOrNot) || /[^0-9dD+\-*\/()]/.test(mutiOrNot))
      return undefined;

    finalStr = '基本擲骰：\n' + DiceCal(mutiOrNot).eqStr;
  }

  if (/NaN/.test(finalStr) || /undefined/.test(finalStr)) return undefined;
  return finalStr;
}

// PBTA判定
function pbta(inputStr) {

  // 先把句首前面的一段拆出來
  let input = inputStr.toLowerCase().split(' ', 2)[0];

  // 確定pb後面只有加或減
  if (/^\.pb[^+\-]/.test(input) || /[^0-9pb+\-\.]/.test(input))
    return undefined;

  // 把pb去掉，留下後面的+-值，處理報錯
  bonus = input.replace('.pb', '');
  if (bonus != '' && bonus.match(/-\d|\+\d/) == null) return undefined;

  // 使用DiceCal.eq取得算式
  let CalStr = DiceCal('2d6' + bonus).eq;
  let CalAns = eval(CalStr.toString());

  if (CalAns >= 10)
    return 'pbta擲骰：\n' + CalStr + '=' + CalAns + '，成功啦。';
  else if (CalAns)
    return 'pbta擲骰：\n' + CalStr + '=' + CalAns + '，失敗了呢。';
  else
    return 'pbta擲骰：\n' + CalStr + '=' + CalAns + '，部分成功哦。';

}

// cc指令
function CoC7th(inputStr, guildFlag = false) {

  // 記錄檢定要求值，取 = 後的整數部分
  let chack = parseInt(inputStr.split('=', 2)[1]);

  let ReStr = 'CoC7th擲骰：\n(1D100<=' + chack + ') → ';

  // 先骰兩次十面骰作為起始值。為什麼要這樣呢，因為獎懲骰的部分十面骰需要重骰，這樣到時候會簡單一點。
  let TenRoll = Dice(10);
  let OneRoll = Dice(10) - 1;

  // 把剛剛的十面骰組合成百面
  let firstRoll = TenRoll * 10 + OneRoll;
  if (firstRoll > 100) firstRoll = firstRoll - 100;

  // 先設定最終結果等於第一次擲骰
  let finalRoll = firstRoll;

  // 成長骰
  if (/^\.cc>\d+/.test(inputStr)) {
    chack = parseInt(inputStr.split('>', 2)[1]);
    if (finalRoll > chack || finalRoll > 95) {
      let plus = Dice(10);
      ReStr = 'CoC7th擲骰【技能成長】：\n(1D100>' + chack + ') → ' + finalRoll + ' → 成功成長' + plus + '點。\n最終值為：' + chack + '+' + plus + '=' + (chack + plus);
      return ReStr;
    }
    else if (finalRoll <= chack) {
      ReStr = 'CoC7th擲骰【技能成長】：\n(1D100>' + chack + ') → ' + finalRoll + ' → 沒有成長。';
      return ReStr;
    }
    else return undefined;
  }


  // 獎懲骰
  let BPDice = null;

  if (/^.cc\(-?\d+\)/.test(inputStr))
    BPDice = parseInt(inputStr.split('(', 2)[1]);

  if (Math.abs(BPDice) != 1 && Math.abs(BPDice) != 2 && BPDice != null)
    return 'CoC7th的獎懲骰，允許的範圍是一到兩顆哦。';

  // 獎勵骰
  if (BPDice != null) {
    let tempStr = firstRoll;
    for (let i = 1; i <= Math.abs(BPDice); i++) {
      let OtherTenRoll = Dice(10);
      let OtherRoll = OtherTenRoll.toString() + OneRoll.toString();

      if (OtherRoll > 100) OtherRoll = parseInt(OtherRoll) - 100;

      tempStr = tempStr + '、' + OtherRoll;
    }
    let countArr = tempStr.split('、');
    if (BPDice > 0) finalRoll = Math.min(...countArr), ReStr = 'CoC7th擲骰【獎勵骰取低】：\n(1D100<=' + chack + ') → ';
    if (BPDice < 0) finalRoll = Math.max(...countArr), ReStr = 'CoC7th擲骰【懲罰骰取高】：\n(1D100<=' + chack + ') → ';

    ReStr = ReStr + tempStr + ' \n→ ';
  }

  // 結果判定
  ReStr = ReStr + finalRoll;
  if (finalRoll <= 5) ReStr += ' → 大成功哦！恭喜你。';
  else if (finalRoll >= 95) ReStr += ' → 哇，大失敗啊。';
  else if (finalRoll <= chack / 5) ReStr += ' → 極限成功哦。';
  else if (finalRoll <= chack / 2) ReStr += ' → 困難成功哦。';
  else if (finalRoll <= chack) ReStr += ' → 通常成功。';
  else ReStr += ' → 失敗了呢。';

  // 傳送表情符號
  if (guildFlag) {
    if (/大成功哦！恭喜你。/.test(ReStr)) ReStr += '\n<:TakotsukiSparkle:1409274012055502990> ';
    else if (/哇，大失敗啊。/.test(ReStr)) ReStr += '\n<:TakotsukiComplete:1407737933531975791>';
    else if (/極限成功哦。/.test(ReStr)) ReStr += '\n<:Takotsuki:1407728958551752835> ';
    else if (/困難成功哦。/.test(ReStr)) ReStr += '\n<:Takotsuki:1407728958551752835> ';
    else if (/通常成功。/.test(ReStr)) ReStr += '\n<:Takotsuki:1407728958551752835>';
    else if (/失敗了呢。/.test(ReStr)) ReStr += '\<:TakotsukiJelly:1408082300348010516>';
  }

  return ReStr;
}

//依照關鍵字傳送圖片的函數
function SendImg(rplyToken, inputStr) {
  let message = [
    {
      chack: ['想相離家出走', '阿想離家出走'],
      img: ['https://i.imgur.com/FItqGSH.jpg']
    },
    {
      chack: ['我什麼都沒有'],
      img: ['https://i.imgur.com/k4QE5Py.png']
    }

  ]

  for (i = 0; i < message.length; i++) {
    for (j = 0; j < message[i].chack.length; j++) {
      if (inputStr.toLowerCase().match(message[i].chack[j]) != null) {
        let tempImgUrl = message[i].img[Dice(message[i].img.length) - 1];
        let rplyVal = [
          {
            type: "image",
            originalContentUrl: tempImgUrl,
            previewImageUrl: tempImgUrl
          }
        ]
        SendMsg(rplyToken, rplyVal);
        return undefined;
      }
    }

  }

  return undefined;
}

function EitoManual(guildFlag = false) {
  //一般功能說明
  let manual = '\
    呀，是我哦。究竟是什麼情況，才會讓你們不得不放我出來……只為了負責擲骰呢？\
    \n首先，我的通用擲骰需要在開頭打上「.」。例如：.1d6、.3d10。\
    \n當然也能進行額外加減。例如：.2d4+1、.2d10+1d2。\
    \n需要多筆輸出，就先打次數再空一格打骰數。例如：.7 3d6、.5 2d6+6。\
    \n用大寫D或是小寫d都可以，我不介意哦。 \
    \n \
    \n跟我聊天的指令是「eito」。還是你們只想叫我「aotsuki」呢？\
    \n想怎麼稱呼都請隨意吧，我可沒有笨到聽不懂自己的姓氏。\
    \n啊，但是沒事可以不要跟我搭話嗎？\
    \n總之，我也知道不少CoC 7th指令，可打「eito cc」取得更多說明。 \
    \n初步支持pbta擲骰，當然也要加上「.」。語法為.pb、.pb+2。\
    \n還有一些額外功能，想知道就用「eito 額外功能」問我吧。\
    \n \
    \n以上功能均繼承至RoboYabaso（HTKRPG的前身），幫大忙了，謝謝。 \
    ';

  if (guildFlag) manual += '\n<:Takotsuki:1407728958551752835>';

  return manual;
}

// "eito" "aotsuki" 的回應
function EitoReply(inputStr, guildFlag = false, userName = '') {

  if (/額外功能/.test(inputStr)) {

    return '\
    你真的問了啊。好，目前實裝的功能有以下這些：\
    \n \
    \n運勢：只要提到我的名字和[運勢]，我就會回答你的運勢。 \
    \n隨機選擇：只要提到我的名字和[選、挑、決定]，空一格開始打選項，\
    \n選項之間也用空格隔開。那麼，我就會幫你從中挑一個。\
    \n抽籤：只要提到我的名字和[抽籤]，我就會幫你從100個籤裡面抽一張。 \
    \n內容出自東京淺草寺一百籤，最後會附上參考資料網址。\
    \n \
    \n這麼說來我的特異科目是占卜呢。或許我會對籤詩動手腳也說不定……哎呀，開玩笑的啦。\
    ';

  } else if (/cc/.test(inputStr)) {

    return '\
      【CC功能說明】\
      \n \
      \n基礎指令：\
      \ncc<=[數字]：和凍豆腐一樣，最常用的一般檢定。\
      \ncc([-2~2])<=[數字]：獎懲骰。\
      \ncc>[數字]：幕間成長骰，用於幕間技能成長。\
      ';

  } else if (/選/.test(inputStr) || /決定/.test(inputStr) || /挑/.test(inputStr)) {

    let rplyArr = inputStr.split(' ');
    if (rplyArr.length == 1) return '哈啊……你想讓我幫你決定什麼呢？';
    rplyArr.shift();

    // 1/6機率不給答案
    if (Dice(6) == 1) {
      rplyArr = [
        '抱歉，現在不是想做選擇的心情呢。',
        '唔……我不太想回答這種問題。',
        '嗯……就選最普通的那個如何？反正差別也不大。',
        '這種小事，你隨便挑一個不就好了嗎？交給我反而浪費時間吧。',
        '咦？啊，我剛才沒聽清楚耶，抱歉。',
        '我沒什麼興趣，你還是自己決定吧。'];
      return rplyArr[Dice(rplyArr.length) - 1];
    }

    let prefixArr = [
      '原來如此。',
      '那就，',
      '嗯，',
      '哦，'];

    let suffixArr = [
      '吧。',
      '好了。',
      '怎麼樣？',
      '如何？'];

    return prefixArr[Dice(prefixArr.length) - 1] + rplyArr[Dice(rplyArr.length) - 1] + suffixArr[Dice(suffixArr.length) - 1];

  } else if (/運勢/.test(inputStr)) {

    let rplyArr = ['超大吉', '大吉', '大吉', '中吉', '中吉', '中吉', '小吉', '小吉', '小吉', '小吉', '凶', '凶', '凶', '大凶', '大凶', '還是算了吧'];
    let Future = rplyArr[Dice(rplyArr.length) - 1];

    if (Future == '還是算了吧') Future += '。\n要是醜陋的你對著我唉聲嘆氣，我會很困擾的……';
    else if (Future == '大凶') Future += '。\n真是不走運呢。';
    else if (Future == '凶') Future += '。\n唔……今天可能會有點倒楣呢。';
    else if (Future == '小吉') Future += '。\n嗯，還算不錯吧。';
    else if (Future == '中吉') Future += '。\n今天是個不錯的日子哦。';
    else if (Future == '大吉') Future += '。\n恭喜，今天是你的幸運日哦！';
    else if (Future == '超大吉') Future += '。\n這、這是……連我都必須承認你很幸運了呢，恭喜你～好好把握今天吧？';

    return '你今天的運勢是——' + Future;

  } else if (/抽籤/.test(inputStr)) {

    const number = Dice(100);
    const result = lots[number];
    const lines = result.split("\n");
    let rplyArr = [`你抽到的是——第 ${number} 籤。是你想要的結果嗎？`];
    rplyArr.push('========================');

    lines.forEach((line, index) => {
      if (index === 0) rplyArr.push(`【${line}】\n`);
      else if ([1, 3, 5, 7].includes(index)) rplyArr.push(`**${line}**`);
      else if (index === 9) rplyArr.push('\n' + line);
      else rplyArr.push(line);
    });
    rplyArr.push('========================');

    const numStr = number.toString().padStart(3, '0');
    rplyArr.push(`http://www.chance.org.tw/籤詩集/淺草金龍山觀音寺一百籤/籤詩網‧淺草金龍山觀音寺一百籤__第${numStr}籤.htm`);

    return rplyArr.join("\n");
  }

  // 查詢關鍵字
  const result = keywordsReply.find(m =>
    m.chack.some(keyword => inputStr.includes(keyword))
  );

  // 有符合關鍵字就回應，沒有就回一般回應
  if (result)
    return result.text[Dice(result.text.length) - 1].replace('{userName}', userName);
  else
    return normalReply[Dice(normalReply.length) - 1];

}

// --------------------------------------

// 主程式
function parseInput(rplyToken, inputStr, guildFlag = false, userName = '') {

  console.log('InputStr: ' + inputStr);
  _isNaN = function (obj) {
    return isNaN(parseInt(obj));
  }

  inputStr = inputStr.toLowerCase();

  if (/^\.cc<=/.test(inputStr) || /^\.cc>'/.test(inputStr))
    return CoC7th(inputStr, guildFlag);

  else if (/^\.(pb)/.test(inputStr))
    return pbta(inputStr);

  else if (/使用說明/.test(inputStr))
    return EitoManual();

  else if (/eito/.test(inputStr) || /aotsuki/.test(inputStr))
    return EitoReply(inputStr, guildFlag, userName);

  // else if (inputStr.toLowerCase().match('.jpg') != null) 
  // return SendImg(rplyToken, inputStr) ;

  else if (/^\./.test(inputStr) && /\w/.test(inputStr) && /d/.test(inputStr))
    return nomalDiceRoller(inputStr);

  else return undefined;
}

// 主程式入口
module.exports = {
  parseInput
};