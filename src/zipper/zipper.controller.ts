import { Controller, Get, Header, Response } from '@nestjs/common';
import { ZipperService } from './zipper.service';

@Controller('zipper')
export class ZipperController {
  constructor(private readonly zipperService: ZipperService) {}

  @Get()
  @Header('content-type', 'application/zip')
  downloadAsZip(@Response() response) {
    this.zipperService.getS3Config().streamZipDataTo(
      {
        pipe: response,
        folderName: 'example',
        recursive: true,
      },
      (error, result) => {
        if (error) console.error(error);
        else console.log(result);
      },
    );
  }
}
