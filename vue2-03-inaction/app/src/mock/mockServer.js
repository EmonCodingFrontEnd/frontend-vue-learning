// 先引入mockjs模块
import Mock from 'mockjs'
// 把JSON数据格式引入进来【JSON数据格式根本没有对外暴露，但是可以引入】
import banners from '@/mock/banners.json'
import floors from '@/mock/floors.json'

// mock数据
Mock.mock("/mock/banners", { code: 200, data: banners });
Mock.mock("/mock/floors", { code: 200, data: floors });

