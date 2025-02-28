// 全局环境变量类型声明

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      // CLI相关环境变量
      CLI_HOME?: string;      // CLI工具主目录
      CLI_TARGET_PATH?: string; // 本地调试文件路径
      LOG_LEVEL?: 'info' | 'debug'; // 日志级别
      
      // 可以根据需要添加更多环境变量类型
    }
  }
}

// 这个导出是必须的，使这个文件被视为一个模块
export {};