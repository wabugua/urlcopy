document.addEventListener('DOMContentLoaded', function() {
  // 获取当前标签页的URL
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    const currentTab = tabs[0];
    document.getElementById('currentUrl').textContent = currentTab.url;
    
    document.getElementById('shareButton').addEventListener('click', function() {
      // 飞书表单的URL
      const formUrl = 'https://r1txjph3ok7.feishu.cn/share/base/form/shrcnMsGsr3aAOJRxup5lxTIwlg';
      
      // 构建带参数的URL
      const shareUrl = `${formUrl}?url=${encodeURIComponent(currentTab.url)}&title=${encodeURIComponent(currentTab.title)}`;
      
      // 在新标签页中打开表单
      chrome.tabs.create({ url: shareUrl });
    });
  });
});