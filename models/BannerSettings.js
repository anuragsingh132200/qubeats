import mongoose from "mongoose";

const BannerSettingsSchema = new mongoose.Schema(
  {
    isVisible: {
      type: Boolean,
      default: true,
    },
    content: {
      type: String,
      default: "We have recently raised a capital. Click on this to learn more.",
      trim: true,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    versionKey: false,
  }
);

// Ensure only one document exists
BannerSettingsSchema.statics.getSettings = async function () {
  let settings = await this.findOne();
  if (!settings) {
    settings = await this.create({});
  }
  return settings;
};

const BannerSettings =
  mongoose.models.BannerSettings ||
  mongoose.model("BannerSettings", BannerSettingsSchema);

export default BannerSettings;

