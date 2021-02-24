import { Controller, Get, HttpStatus, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { FindAllShortcutsByUserIdService } from '../../services/findAllShortcutsByUserId.service';

@Controller('myShortcuts')
export class MyShortcutsController {
  constructor(private findShorcutByUserId: FindAllShortcutsByUserIdService) {}

  @Get()
  async handleGet(@Req() req: Request, @Res() res: Response) {
    const userId = req.user?.id;

    if (!userId) {
      return res
        .status(HttpStatus.FORBIDDEN)
        .json({ message: 'Não autenticado' });
    }

    return res.status(200).json(await this.findShorcutByUserId.execute(userId));
  }
}
