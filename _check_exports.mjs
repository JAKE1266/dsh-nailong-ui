const fs = require('fs');
const c = fs.readFileSync('C:/Users/lenovo/Documents/deepseek-harness/default-workspace/dsh-nailong-ui/client/client.js', 'utf8');
console.log('has installConflictCheck:', c.includes('installConflictCheck'));
console.log('has detectSkinConflicts:', c.includes('detectSkinConflicts'));
console.log('has PEER_SKIN_ATTRIBUTES:', c.includes('PEER_SKIN_ATTRIBUTES'));
console.log('has installConflictCheck export:', c.includes('installConflictCheck'));
console.log('has detectSkinConflicts export:', c.includes('detectSkinConflicts'));
console.log('has PEER_SKIN_ATTRIBUTES export:', c.includes('PEER_SKIN_ATTRIBUTES'));