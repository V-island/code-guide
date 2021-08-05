# 图片大小
---

## 图片大小

### 全国网速现状

#### 固定网络

据文章 [《2015年Q3中国宽带速率状况报告》](http://www.199it.com/archives/399272.html)，2015第三季全国平均速度整体情况：

![image](/img/202009091407446218.png)



中国固定宽带互联网网络平均网络下载速率达到7.90 Mbit/s，用户进行网页浏览的平均首屏呈现时间为2.18s，平均视频下载速率为6.41Mbit/s

#### 移动网络


3G网络传输速率理论峰值在3.5Mbps，4G网络传输速率理论上可达到20Mbps，最高可以达到100Mbps。根据 `128KB/s=128×8(Kb/s)=1024Kb/s=1Mb/s` 的转换来算，3G网络的理论传输速率可达到450KB/s，4G网络的理论传输速率可达到 2.5MB/s ~ 12.5MB/s

受用户计算机性能、网络设备质量、资源使用情况、网络高峰期、网站服务能力、线路衰耗、信号衰减等多因素影响，3G和4G的实际平均传输速率约为：

* 3G：最高值100KB/s，平均值40～50KB/s
* 4G：最高值2.75MB/s，平均500～1000KB/s



### 3G/4G用户占比


2015年8月移动宽带（3G/4G）用户占比各省分布情况：

![image](/img/202009091407555809.png)

据文章 [《工信部：2015年7月底中国4G用户累计超过2.5亿》](http://www.199it.com/archives/393838.html) 介绍：

> 截至2015年7月底，中国4G用户累计超过2.5亿（全球LTE用户超过7.9亿，全球TD-LTE用户超过2.78亿），已建设4G基站超过153万个，其中完成TD-LTE基站建设超过100万个，多载波聚合等TD-LTE演进技术逐步商用，4G智能手机已经占到国内智能手机市场的82.7%。


## 团队约定

中国普通家庭的宽带基本能达到8Mbps，实际速率大约为500---900KB/s，全国3G/4G用户占有比超过了50%，为了保证图片能更好地加载展示给用户看，团队约定：

**PC平台单张的图片的大小不应大于 200KB。**

**移动平台单张的图片的大小不应大于 100KB。**

*（图片的大小约定标准随全国网速的改变而改变）*