# fy-quarter

Calculates the quarter and fiscal year for a given date and fiscal year start month.

## Install

```bash
npm install fy-quarter
```

## Usage

The package takes 2 parameters, Date and quarter Start

### Date

This parameter should be an [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) compliant date YYYY-MM-DD.

### Quarter Start

This parameter should corrospond to the month where the first quarter begins.

| Month | FY Year Start Month   |
|--     |--                     |
| Jan   | 1                     |
| Feb   | 2                     |
| Mar   | 3                     |
| Apr   | 4                     |
| May   | 5                     |
| Jun   | 6                     |
| Jul   | 7                     |
| Aug   | 8                     |
| Sep   | 9                     |
| Oct   | 10                    |
| Nov   | 11                    |
| Dec   | 12                    |

## Example

This example shows the output for 23rd June 2022 where the fiscal year starts in april.

```bash
const fyQuarter = require("fy-quarter");

fyQuarter("2022-06-23", "4"); 
// { quarter: 1, fiscalYear: 2023, text: 'Q1 - FY23' }
```
