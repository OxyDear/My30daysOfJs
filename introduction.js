
let challenge = '30 Days Of JavaScript'
let challenge1 = '30 Days '
let challenge2 = 'Of JavaScript'
let companies = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
let cannot = 'You cannot end a sentence with because because because is a conjunction'
let per = 'I hope this course is not full of jargon.'
let js = 'JavaScript'
let love = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'

console.log(challenge.split(' '))
console.log(companies.split(', '))
console.log(challenge.replace('JavaScript', 'Python'))
console.log(challenge.lastIndexOf('a'))
console.log(challenge.endsWith('Script'))
console.log(challenge.match(/a/gi))
console.log(challenge1.concat(challenge2))
console.log(challenge.repeat(2))
console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.\' by John Holmes teaches us to help one another.'")
console.log("Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.")
console.log(typeof parseFloat('9.8') === typeof 10)
console.log(typeof parseFloat('9.8'), typeof 10)
console.log('python'.search('on') > 0, 'jargon'.search('on') > 0)
console.log(Math.floor(Math.random() * (255 + 1)))
console.log(per.search('jargon') > 0)
console.log(js[Math.floor(Math.random() * (js.length + 1))])

/*  1 1 1 1 1
    2 1 2 4 8
    3 1 3 9 27
    4 1 4 16 64
    5 1 5 25 125 */

console.log('1\t1\t1\t1\t1')
console.log('2\t1\t2\t4\t8')
console.log('3\t1\t3\t9\t27')
console.log('4\t1\t4\t16\t64')
console.log('5\t1\t5\t25\t125')
console.log(cannot.search('because because because'))
console.log(cannot.substring(0, cannot.search('because because because')) +
    cannot.substring(cannot.search('because because because') + 24))
console.log(love.match(/love/gi).length)
console.log(cannot.match(/because/gi).length)
let changedSentence = sentence.replace(/%/g, '')
changedSentence = changedSentence.replace(/@/g, '')
changedSentence = changedSentence.replace(/%/g, '')
changedSentence = changedSentence.replace(/#/g, '')
changedSentence = changedSentence.replace(/&/g, '')
changedSentence = changedSentence.replace(/;/g, '')
changedSentence = changedSentence.replace(/\$/g, '').toLowerCase()
let changedSentenceList = changedSentence.split(' ')
let value = changedSentence.match(/`${changedSentenceList[0]}`/gi)
console.log(changedSentence, value)
