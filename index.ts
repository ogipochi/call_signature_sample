// 戻り血を数値型で指定し、数値をreturn
function func_1(a: string): number {
    return 10;
}

// 戻り血をvoidで指定、returnを呼び出さない
function func_2(a: string): void {
}

// 戻り血をvoidで指定、returnでなにも返さない
function func_3(a: string): void {
    return;
}

// NOTE: エラーパターン
// // 戻り血がnumberなのに何も返していない
// function func_1_error_1(a: string): number {
// }

// // 戻り血がvoidなのに値を返す
// function func_2_error_1(a: string): void {
//     return 10;
// }

// 呼び出しシグネチャ（オブジェクトタイプ）
type Func4 = {
    (a: string): number
}
const func_4_variable : Func4 = function func_4(a) {
    return 10;
}

// 呼び出しシグネチャ（アロータイプ）
type Func5 = (a: string) => number;
const func_5_variable: Func5 = (a) => {
    return 10;
}

// 呼び出しシグネチャ、戻り血がvoid
type Func6 = (a: string) => void;
const func_6_variable: Func6 = function func_6(a) {
    return;
}

// NOTE: エラーパターン
// 呼び出しシグネチャの戻り血がnumberなのに戻り血も違う
// type Func4Error1 = {
//     (a: string): number
// }
// const func_4_variable_error_1: Func4Error1 = function func_4_error_1(a) {
// }
// const func_4_variable_error_2: Func4Error1 = function func_4_error_2(a) {
//     return "Hello World"
// }

type Func7 = (a: string) => void;
const func_7_variable: Func7 = (a) => {
    return null;
}

// 返り値がstringまたはnumberを要求
type Func8 = (a: string) => string | number;
const func_8_variable: Func8 = (a): number => {
    return 10;
}


/**
 * ただ与えられた関数を実行するだけのクラス
 */
class SampleExecuter{
    async executeFunc (first: () => void | Promise<void>, second: () => void | Promise<void>) {
        await first();
        await second();
    }
}
/**
 * モンスターが現れるまでのセリフを管理する関数
 * @returns 
 */
const priorConversation = (): Promise<void> => {
    return new Promise<void>((resolve, reject) => {
        console.log("おっさん「この辺りはモンスターが出るぞ、気をつけろ」");
        setTimeout(() => {
            console.log("おっさん「そこにいるのは…モンスターだ！」");
            resolve();
        },3000);
    });
}

/**
 * モンスターとバトルする処理
 */
const startBattle = (): Promise<void> => {
    return new Promise<void>((resolve, reject) => {
        console.log("モンスターが現れた！！！");
        setTimeout(() => {
            console.log("おっさんの攻撃！！！モンスターを倒した！！！");
        },2000);
    });
}

// 実行
const sampleExecuter = new SampleExecuter();
sampleExecuter.executeFunc(priorConversation, startBattle);