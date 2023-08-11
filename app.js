import * as math from "./scripts/math.js";
import * as types from "./scripts/operator-types.js";

const calculate = () => {
  const $term1 = Number(document.getElementById("term1").value);
  const $term2 = Number(document.getElementById("term2").value);
  const $operator = document.getElementById("operators").value;

  switch ($operator) {
    case types.lt:
      result(math.lessThan($term1, $term2));
      break;
    case types.gt:
      result(math.greaterThan($term1, $term2));
      break;
    case types.le:
      result(math.lessOrEquals($term1, $term2));
      break;
    case types.ge:
      result(math.greaterOrEquals($term1, $term2));
      break;
    case types.eq:
      result(math.Equals($term1, $term2));
      break;
    case types.ne:
      result(math.NotEquals($term1, $term2));
      break;
    default:
      result(false);
      break;
  }
};

const $result = document.getElementById("result");
const result = (value) => {
  $result.value = value;
};

const $calculateBtn = document.getElementById("calculate-btn");
$calculateBtn.addEventListener("click", calculate);
