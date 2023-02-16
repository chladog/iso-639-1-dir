import assert from 'assert';
import ISO6391 from '../dist/index.js';

describe('getName()', function () {
  it('en', function () {
    assert.equal(ISO6391.getName('en'), 'English');
  });
  it('zh', function () {
    assert.equal(ISO6391.getName('zh'), 'Chinese');
  });
  it('xx', function () {
    assert.equal(ISO6391.getName('xx'), undefined);
  });
  it('toString', function () {
    assert.equal(ISO6391.getName('toString'), undefined);
  });
});

describe('getNativeName()', function () {
  it('en', function () {
    assert.equal(ISO6391.getNativeName('en'), 'English');
  });
  it('zh', function () {
    assert.equal(ISO6391.getNativeName('zh'), '中文');
  });
  it('xx', function () {
    assert.equal(ISO6391.getNativeName('xx'), undefined);
  });
  it('toString', function () {
    assert.equal(ISO6391.getNativeName('toString'), undefined);
  });
});

describe('getCode()', function () {
  it('English', function () {
    assert.equal(ISO6391.getCode('English'), 'en');
  });
  it('Chinese', function () {
    assert.equal(ISO6391.getCode('Chinese'), 'zh');
  });
  it('中文', function () {
    assert.equal(ISO6391.getCode('中文'), 'zh');
  });
  it('xx', function () {
    assert.equal(ISO6391.getCode('xx'), undefined);
  });
  it('toString', function () {
    assert.equal(ISO6391.getCode('toString'), undefined);
  });
});

describe('validate()', function () {
  it('en', function () {
    assert.equal(ISO6391.validate('en'), true);
  });
  it('zh', function () {
    assert.equal(ISO6391.validate('zh'), true);
  });
  it('xx', function () {
    assert.equal(ISO6391.validate('xx'), false);
  });
  it('toString', function () {
    assert.equal(ISO6391.validate('toString'), false);
  });
});

describe('getDir()', function () {
  it('English', function () {
    assert.equal(ISO6391.getDir('en'), 'ltr');
  });
  it('Chinese', function () {
    assert.equal(ISO6391.getDir('zh'), 'ttb');
  });
  it('Arabic', function () {
    assert.equal(ISO6391.getDir('ar'), 'rtl');
  });
  it('xx', function () {
    assert.equal(ISO6391.getDir('xx'), undefined);
  });
  it('Czech', function () {
    assert.equal(ISO6391.getDir('cs'), 'ltr');
  });
});

describe('getLanguages()', function () {
  it('[en, zh, xx, toString]', function () {
    assert.deepEqual(ISO6391.getLanguages(['en', 'zh', 'xx', 'toString']), [
      {
        code: 'en',
        name: 'English',
        nativeName: 'English',
        dir: 'ltr'
      },
      {
        code: 'zh',
        name: 'Chinese',
        nativeName: '中文',
        dir: 'ttb'
      }
    ]);
  });
});
