const quarterOf = (month) => {
  if (month <= 3) {
    return 1
  } else if (month <= 6) {
    return 2
  } else if (month <= 9) {
    return 3
  } else if (month <= 12) {
    return 4
  }
  
}
// shorter way to solve this

// const quarterOf = month => Math.ceil(month / 3);

// ANOTHER WAY TO SOLVE THIS
// const quarterOf = (month, quarter = 4) => {
// 	switch (month) {
// 		case 1:
// 		case 2:
// 		case 3:
// 			quarter = 1;
// 			break;
// 		case 4:
// 		case 5:
// 		case 6:
// 			quarter = 2;
// 			break;
// 		case 7:
// 		case 8:
// 		case 9:
// 			quarter = 3;
// 			break;
// 	}
// 	return quarter;
// };