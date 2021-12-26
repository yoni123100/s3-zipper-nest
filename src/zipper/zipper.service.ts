import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as S3Zipper from 'aws-s3-zipper';

@Injectable()
export class ZipperService {
  private zipper: any;

  constructor(private configService: ConfigService) {
    this.zipper = new S3Zipper({
      accessKeyId: this.configService.get('s3.access_key'),
      secretAccessKey: this.configService.get('s3.secret_key'),
      region: this.configService.get('s3.region'),
      bucket: this.configService.get('s3.bucket'),
    });
  }

  getS3Config() {
    return this.zipper;
  }
}
