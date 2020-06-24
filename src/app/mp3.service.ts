import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Mp3Service {

  playlist = [
    {
      id: 'zODlPC76E8Yo',
      song: 'Cung đàn vỡ đôi - Chi Pu'
    },
    {
      id: 'wVx961NiDHqY',
      song: 'Tình Sầu Thiên Thu Muôn Lối - Võ Đình Hiếu'
    },
    {
      id: 'vtEybe9NxLw7',
      song: 'Hãy Trao Cho Anh - Sơn Tùng M-TP, Snoop Dogg'
    },
    {
      id: 'fuwWtPb4h3B2',
      song: 'Chạy Ngay Đi - Sơn Tùng M-TP'
    },
    {
      id: 'Qtd3XdEr5XtP',
      song: 'Chúng Ta Không Thuộc Về Nhau - Sơn Tùng M-TP'
    },
    {
      id: '1zgnYKyUyp44',
      song: 'Yummy - Justin Bieber'
    },
    {
      id: 'ok4ZlT7BI8BZ',
      song: 'Forever Alone - JustaTee'
    },
    {
      id: '4ez87Pu1dOZr',
      song: 'Đã Lỡ Yêu Em Nhiều (VRT x C.A.O Remix) - JustaTee'
    },
  ];
  videos = [
    {
      id: 'X86gFiPkVJo',
      song: 'Bad Child'
    },
    {
      id: 'kZRqYAfj19o',
      song: 'Justin Bieber - Forever (feat. Post Malone & Clever)'
    },
    {
      id: 'weeI1G46q0o',
      song: 'Im The One ft.Justin Bieber, Quavo, Chance the Rapper & Lil Wayne'
    },
    {
      id: 'DK_0jXPuIr0',
      song: 'Justin Bieber - What Do You Mean?'
    },
  ]
  constructor() { }
  find(id: string) {
    return this.playlist.find(item => item.id === id);
  }
  findVideo(id: string) {
    return this.videos.find(item => item.id === id)
  }
}
