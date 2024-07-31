export default function createInt8TypedArray(length, position, value) {
  const Arr = new ArrayBuffer(length);
  const Val = new DataView(Arr);

  try {
    val.setInt8(position, value);
  } catch (a) {
    throw Error('Position outside range');
  }
  return Val;
}
