interface Ioutput {
  quarter: number,
  fiscalYear: number,
  text: string
}

const myfun = (inputDate: string, quarterStart: number): Ioutput | Error => {

  if (quarterStart < 1 || quarterStart > 12) { return new Error('Quarter start value must be from 1 to 12') }
  if (isNaN(quarterStart)) { return new Error('Quarter start must be a number') }


  const date: Date = new Date(inputDate);

  if (isNaN(date.getTime())) return Error('Invalid date provided. Please use ISO8601 standard of YYYY-MM-DD')


  let arr: any = [1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4]


  for (let i: number = 0; i <= quarterStart - 2; i++) {
    arr.unshift(arr.pop());
  }

  const quarter: number = parseInt(arr[date.getMonth()]);
  const fiscalYear: number =
    date.getMonth() >= arr.indexOf("1")
      ? date.getFullYear() + 1
      : date.getFullYear();

  const text: string = `Q${quarter} - FY${fiscalYear.toString().slice(2)}`


  const output: Ioutput = {
    quarter,
    fiscalYear,
    text
  };

  return output
};


module.exports = myfun

// ISO 8601 Format https://www.iso.org/iso-8601-date-and-time-format.html YYYY-MM-DD

/*
Jan = 1
Feb = 2
Mar = 3
Apr = 4
May = 5
Jun = 6
Jul = 7
Aug = 8
Sep = 9
Oct = 10
Nov = 11
Dec = 12

*/
// const aaa = main("2022-04-01", 4);

// console.log(aaa.text);

