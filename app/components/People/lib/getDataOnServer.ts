"use server";
export const getPerson = async () => {
  const res = await fetch(`${process.env.PUBLICK_URL}/api/get-people`);

  return res.json();
}