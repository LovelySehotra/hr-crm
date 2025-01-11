
export class UploadsController {
  handleNewImageUpload = async (req, res) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    if (!req.file) throw new Error("400::no file attached");
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    res.json({ uri: `/api/uploads/images/${req.file.filename}` });
  };

  handleGalleryUpload = async (req, res) => {
    const urls = [];
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    if (!req.files) throw new Error("400::no file attached");
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    for (const file of req.files) {
      urls.push(`/api/uploads/gallery/${file.filename}`);
    }
    res.json({ uri: urls });
  };

  handleNewFileUpload = async (req, res) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    if (!req.file) throw new Error("400::no file attached");
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    res.json({ uri: `/api/uploads/files/${req.file.filename}` });
  };

  handleNewVideoUpload = async (req, res) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    if (!req.file) throw new Error("400::no file attached");
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    res.json({ uri: `/api/uploads/videos/${req.file.filename}` });
  };
}
