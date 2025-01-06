import multer from "multer";
import path from "path";
import fs from "fs"; // استيراد مكتبة fs

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const categoryPath = path.join(process.cwd(), "public/uploads", req.params.category);

    // تحقق من وجود المجلد وقم بإنشائه إذا لم يكن موجودًا
    if (!fs.existsSync(categoryPath)) {
      try {
        fs.mkdirSync(categoryPath, { recursive: true });
        console.log("Directory created:", categoryPath);
      } catch (error) {
        console.error("Error creating directory:", error);
        return cb(error, null);
      }
    }
    cb(null, categoryPath);
  },
  filename: (req, file, cb) => {
    // إنشاء اسم فريد للملف
    const uniqueName = Date.now() + path.extname(file.originalname);
    console.log("Saved File Name:", uniqueName);
    cb(null, uniqueName);
  },
});

const upload = multer({ storage });

export default upload;
