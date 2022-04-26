# react-native-template-walletconnect

> React Native Template with WalletConnect and TypeScript

<img src="./docs/demo.gif" alt="Demo Video" width="378" />

```json
{
  "scripts": {
    "postinstall": "rn-nodeify --install fs,dgram,process,path,console,stream,crypto --hack"
  }
}
```

We use [`rn-nodeify`](https://github.com/tradle/rn-nodeify) to enable prerequisite support for Web3. Mostly this is to allow secure random number generation with [`react-native-crypto`](https://github.com/tradle/react-native-crypto).

```ruby
post_install do |installer|
  installer.pods_project.targets.each do |target|
    # https://github.com/tradle/react-native-udp/issues/113#issuecomment-692904125
    if target.name == 'CocoaAsyncSocket'
      source_files = target.source_build_phase.files
      dummy = source_files.find do |file|
        file.file_ref.name == 'GCDAsyncUdpSocket.m'
      end

      if dummy != nil
        source_files.delete dummy
        puts "Deleting source file #{dummy.inspect} from target #{target.inspect}."
      end
    end
  end

  react_native_post_install(installer)
  __apply_Xcode_12_5_M1_post_install_workaround(installer)
end
```

The code above in the iOS Podfile automatically removes duplicate symbol `GCDAsyncUdpSocket` caused by `react-native-udp`—nodefied implementation of `dgram`(See https://github.com/tradle/react-native-udp/issues/113).

