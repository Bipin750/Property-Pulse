"use server";

const { default: connectDB } = require("@/config/databse");
const { default: User } = require("@/models/User");
const { getSessionUser } = require("@/utils/getSessionUser");

async function checkBookmarkStatus(propertyId) {
  await connectDB();

  const sessionUser = await getSessionUser();

  if (!sessionUser || !sessionUser.userId) {
    return { error: "User ID is required" };
  }

  const { userId } = sessionUser;

  // Find user in database
  const user = await User.findById(userId);
  console.log(user);

  // Check if property is bookmarked
  let isBookmarked = user.bookmark.includes(propertyId);

  return { isBookmarked };
}

export default checkBookmarkStatus;
