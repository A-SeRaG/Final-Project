export default function(errors) {
  const result = [];
  for (const error of errors) {
    result.push(error['msg']);
  }
  return result
};
