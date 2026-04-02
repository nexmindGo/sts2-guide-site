/**
 * Build 数据配置文件
 * 
 * 使用说明：
 * 1. 进游戏验证每个 Build 的卡牌名称是否正确
 * 2. 填写真实的卡牌效果描述
 * 3. 调整 Tier 评级
 * 4. 添加更多 Build
 */

export interface Build {
  id: string;
  title: string;
  tier: 'S' | 'A' | 'B' | 'C';
  description: string;
  coreCards: {
    name: string;
    effect: string;      // 卡牌效果描述
    reason: string;      // 为什么选这张卡
  }[];
  keyRelics: {
    name: string;
    effect: string;      // 遗物效果
  }[];
  playstyle: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  icon: 'skull' | 'zap' | 'heart' | 'shield' | 'sword';
  tips: string[];        // 打法技巧
  pros: string[];        // 优点
  cons: string[];        // 缺点
}

export const builds: Build[] = [
  // ============================================
  // Build 1: Poison Control (请替换为真实数据)
  // ============================================
  {
    id: 'poison-control',
    title: 'Poison Control Deck',
    tier: 'S',
    description: 'The most powerful build in Early Access. Stack poison rapidly and watch enemies melt while you stay safe behind layers of block. Perfect for learning the Necrobinder.',
    coreCards: [
      {
        name: 'Deadly Poison',  // TODO: 验证真实卡牌名称
        effect: 'Apply 5(7) Poison.',
        reason: '核心毒伤来源，低成本高效率',
      },
      {
        name: 'Catalyst',
        effect: 'Double(Triple) the target\'s Poison.',
        reason: '毒伤翻倍，配合 Catalyst 可瞬间秒杀 BOSS',
      },
      {
        name: 'Burst',
        effect: 'This turn, your next Skill is played twice.',
        reason: '配合 Catalyst 或 Deadly Poison 双倍效果',
      },
      {
        name: 'Noxious Fumes',
        effect: 'At the start of your turn, apply 2(3) Poison to ALL enemies.',
        reason: '持续挂毒，长时间战斗必备',
      },
      {
        name: 'Crippling Poison',
        effect: 'Apply 4(6) Poison. If they have Poison, apply 4(6) more.',
        reason: '叠加毒伤的好帮手',
      },
    ],
    keyRelics: [
      {
        name: 'Snecko Skull',
        effect: 'Poison applied by your cards is increased by 2.',
      },
      {
        name: 'The Specimen',
        effect: 'Whenever an enemy dies, transfer its Poison to a random enemy.',
      },
      {
        name: 'Twisted Funnel',
        effect: 'At the end of combat, heal 1 HP for each Poison card in your deck.',
      },
    ],
    playstyle: 'Defensive / Scaling',
    difficulty: 'Easy',
    icon: 'skull',
    tips: [
      '前期优先找毒伤卡牌，后期找 Catalyst 翻倍',
      'Block 牌要够，保证存活才能叠毒',
      '对 BOSS 战时，耐心叠毒到 50+ 再用 Catalyst',
    ],
    pros: [
      '新手友好，容错率高',
      '不需要频繁攻击，操作简单',
      '对单体和群体都有效',
    ],
    cons: [
      '打桩战时间较长',
      '需要找到关键卡牌才能成型',
    ],
  },

  // ============================================
  // Build 2: Summon Swarm (请替换为真实数据)
  // ============================================
  {
    id: 'summon-swarm',
    title: 'Summon Swarm Build',
    tier: 'A',
    description: 'Command an army of undead minions to overwhelm your enemies. This build excels in longer fights and scales beautifully into the late game.',
    coreCards: [
      {
        name: 'Raise Dead',
        effect: 'Summon a Zombie minion.',
        reason: '核心召唤卡',
      },
      {
        name: 'Army of One',
        effect: 'Summon 3(4) Zombies.',
        reason: '瞬间铺场',
      },
      {
        name: 'Bone Swarm',
        effect: 'All minions attack for 4(6) damage.',
        reason: '群体伤害',
      },
      {
        name: 'Grave Calling',
        effect: 'Whenever a minion dies, gain 1 Energy.',
        reason: '能量循环',
      },
    ],
    keyRelics: [
      {
        name: 'Lizard Tail',
        effect: 'When you would die, heal to 1 HP instead (once per combat).',
      },
      {
        name: 'Mummified Hand',
        effect: 'Cost of cards with minions is reduced by 1.',
      },
    ],
    playstyle: 'Swarm / Scaling',
    difficulty: 'Medium',
    icon: 'zap',
    tips: [
      '优先升级召唤类卡牌',
      '注意保护存活时间长的 minion',
    ],
    pros: [
      '后期伤害爆炸',
      '有自带的伤害来源',
    ],
    cons: [
      '前期较弱',
      '需要找到多个召唤卡才能成型',
    ],
  },

  // ============================================
  // TODO: 添加更多 Build
  // ============================================
  // {
  //   id: 'build-3',
  //   title: 'Your Build Name',
  //   tier: 'A',
  //   ...
  // },
];
