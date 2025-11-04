const { exec } = require('child_process');

console.log('🚀 Starting SSHX auto-run...');

exec('curl -sSf https://sshx.io/get | sh -s run', (error, stdout, stderr) => {
  if (error) {
    console.error(`❌ Error: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`⚠️ Stderr:\n${stderr}`);
  }
  console.log(`✅ Output:\n${stdout}`);
});
